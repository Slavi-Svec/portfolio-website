import React from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import './styles.scss'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/cardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
// import Pagination from '@material-ui/lab/Pagination'
import Text from '../../Components/Text/Text'
import Image from '../../Components/Image/Image'
import Footer from '../../Components/Footer/Footer'
import AvatarLogo2 from '../../Assets/AvatarLogo2.png'


const BlogPage = () => (
  <section className="blog">
    <div className="blog__section">
      <Navigation />
      <section className="blog__description" id="blog__container">
        <Text
          text="Blog"
          className="blog__title"
          variant="h2"
        />
      </section>
    </div>
    <section className="blog__description">
      <Image className="blog__pencil" src={AvatarLogo2} />
    </section>

    <Container maxWidth="lg" className="blog__blogsContainer">
      <Typography variant="h4" className="blog__blogTitle">
        Articles
      </Typography>
      {/* Article  start */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="blog__card">
            <CardActionArea>
              <CardMedia
                className="blog__media"
                image="https://res.cloudinary.com/dblnwcqqz/image/upload/v1597625382/download-1_rbhqsr.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CodeWars is cool
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Making a start on codeWars
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="blog__CardActions">
              <Box classname="blog__author">
                <Avatar
                  src="https://res.cloudinary.com/dblnwcqqz/image/upload/v1595392581/logo_nsg61p.png"
                />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Slavi Svec
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    Aug 21, 2020
                  </Typography>
                </Box>
              </Box>
              <box>
                <BookmarkBorderIcon />
              </box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* Article end */}
      {/* Article  start */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="blog__card">
            <CardActionArea>
              <CardMedia
                className="blog__media"
                image="https://res.cloudinary.com/dblnwcqqz/image/upload/v1597625382/download-1_rbhqsr.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CodeWars is cool
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Making a start on codeWars
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="blog__CardActions">
              <Box classname="blog__author">
                <Avatar
                  src="https://res.cloudinary.com/dblnwcqqz/image/upload/v1595392581/logo_nsg61p.png"
                />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Slavi Svec
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    Aug 21, 2020
                  </Typography>
                </Box>
              </Box>
              <box>
                <BookmarkBorderIcon />
              </box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* Article end  */}
      {/* Article  start */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="blog__card">
            <CardActionArea>
              <CardMedia
                className="blog__media"
                image="https://res.cloudinary.com/dblnwcqqz/image/upload/v1597625382/download-1_rbhqsr.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CodeWars is cool
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Making a start on codeWars
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="blog__CardActions">
              <Box classname="blog__author">
                <Avatar
                  src="https://res.cloudinary.com/dblnwcqqz/image/upload/v1595392581/logo_nsg61p.png"
                />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Slavi Svec
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    Aug 21, 2020
                  </Typography>
                </Box>
              </Box>
              <box>
                <BookmarkBorderIcon />
              </box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* Article end */}
      {/* <Box my={4} className="blog__paginationContainer">
        <Pagination count={10} />
      </Box> */}
    </Container>


    <section className="blog__description">
      <Text
        text="I can help."
        className="home__help"
        variant="h2"
      />
      <Text
        text="Want to work together? I’d love to hear from you."
        className="home__work-together"
        variant="h3"
      />
      <Text
        text="I’m happy to collaborate on projects so if you require help on some upcoming work, or just want to say hi, than get in touch."
        className="home__contacting"
        variant="p"
      />
    </section>
    <Footer />
  </section>
)
export default BlogPage
