import React,{ useEffect,useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer  from '../../components_site/Footer'
import Error from '../404';
import Container from '@material-ui/core/Container';
import {useStyles} from "../../theme/site/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from 'next/link';
import Box from "@material-ui/core/Box";
import get from 'lodash/get';
import head from 'lodash/head';
import {useRouter} from "next/router";
import SeoMeta from "../../seo/Seo";
import CardMedia from "@material-ui/core/CardMedia";
import fetch from "isomorphic-unfetch";



const Page = (props) => {

      const router = useRouter();
      const classes = useStyles();

      const {error_404,
             seo_data,
             page_data,
            image_url,
            set_internal_page_action,
            set_global_page_action,
            set_tab_action,
            set_drawer_action,
            } = props;


    let query    = router.query;
    let slug     = get(query,"slug",false);

    // console.log("slug-->",slug);
    // console.log("page_content/slug-->",page_content.slug);

    useEffect(() => {
            set_tab_action('PUBLIC_CONTENT');
            set_global_page_action("PUBLIC_CONTENT");
            set_drawer_action(false);
      }, []);


    if(error_404){
         return (<Error Error={404}
                        set_global_page_action={set_global_page_action}
                        set_internal_page_action={set_internal_page_action} />)
    }

    let texto = get(page_data,"texto","");
    let title = get(page_data,"title","");

    function createMarkup() {
          return {__html: texto};
        }

    function MyComponent() {
          return <div dangerouslySetInnerHTML={createMarkup()} />;
       }

    return (
             <div className={classes.searchContent}>
                 <SeoMeta data={seo_data}/>
                  <CssBaseline />
                    <main>
                    <Container maxWidth="md">
                      <Breadcrumbs aria-label="breadcrumb" style={{marginTop:15,marginBottom:15}}>
                          <Link color="inherit" href="/">
                              <a className={classes.link}>
                                Home
                              </a>
                          </Link>
                          <Link color="inherit" href={"/page/"+slug}>
                              <a className={classes.link}>
                               {title}
                              </a>
                          </Link>
                    </Breadcrumbs>
                    <Card>
                         {image_url &&
                            <CardMedia
                                className={classes.blog_media}
                                image={image_url}
                                title={title}
                            />
                        }
                        <CardContent>
                            <MyComponent/>
                        </CardContent>
                    </Card>
                    </Container>
                   <Box mt={5}>
                        <Footer {...props}/>
                   </Box>
                  </main>
               </div>
        );
}


Page.getInitialProps = async (ctx) => {

    let page_data       = {};
    let error_404       = false;
    const query         = get(ctx,'query','');
    const slug          = get(query,'slug',false);
    let url_first_img   = "";
    const url_base      = "https://backend.codefreela.com/data/page?slug=";

    let seo_data_app = {title:"Página | Codefreela.com",
                            description:"Encontre os melhores jobs de TI e programação no Codefreela"
                            }

   try {
          const res         = await fetch(url_base+slug);
          page_data         = await res.json();
          let project_id    = get(page_data,'id',false);
          let title         = get(page_data,'title',"Página");
          let resumo        = get(page_data,'resumo',"");
          let page_slug     = get(page_data,'slug',"");
          let images        = get(page_data,"images",[]);

          let first_img     = head(images) || {};
          url_first_img     = get(first_img,"url","");

          seo_data_app = {title:title+" | Codefreela.com",
                          url:'https://codefreela.com/page/'+page_slug,
                          image_url:url_first_img,
                          description:resumo,
                          set_url_base:false}

          if(project_id === false && slug){
              error_404 = true
          }

      }catch (e) {
         error_404 = true
      }


    return { seo_data:seo_data_app,
             image_url:url_first_img,
             page_data:page_data,
             error_404:error_404}
}




export default Page
