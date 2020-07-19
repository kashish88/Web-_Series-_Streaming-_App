import React,{useRef,useState,useEffect}  from 'react';
import {StyleSheet,Text,View,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar,ImageBackground,TextInput,FlatList} from 'react-native';
import Carousel from 'react-native-anchor-carousel'
import {FontAwesome5,Feather,MaterialIcons} from '@expo/vector-icons'


const Home=()=> {

const[background,setBackground]=useState({
    uri:'https://media.gqindia.com/wp-content/uploads/2020/04/Four-More-Shots-Please-season-2-.jpg',
    name:'Four more shots please!',
    stat:'2020',
    desc:'Four More Shots Please![1] is an Indian web television series on Amazon Prime Video[2] directed by Anu Menon and Nupur Asthana.[3] The series follows the story of four unapologetically flawed women '
})


const[gallery,setgallery]=useState([
   

    {image:'https://media.gqindia.com/wp-content/uploads/2020/04/Four-More-Shots-Please-season-2-.jpg',
    title:'Four more shots please!',released:'2020', key:'1',desc:'Four More Shots Please![1] is an Indian web television series on Amazon Prime Video[2] directed by Anu Menon and Nupur Asthana.[3] The series follows the story of four unapologetically flawed women'
    },

 {image:'https://upload.wikimedia.org/wikipedia/en/9/93/Made_in_Heaven_Title_Card.jpg',
title:'Made In Heaven',released:'2019', key:'2',desc:'Made In Heaven is a 2019 Indian drama web television series ,the series chronicles the lives of Tara and Karan, two wedding planners in Delhi running an agency named Made in Heaven.'
},
{image:'https://image.tmdb.org/t/p/w500/s4bv1qeIzqsI5YlnZm2WG3fPb45.jpg',
title:'Hostages',released:'2019', key:'3',desc:'Hostages is an Indian crime thriller web television series directed by Sudhir Mishra. It is an official adaptation of an Israeli series of the same name.'
},
{image:'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Breathe_%28Web_series%29_poster.jpg/220px-Breathe_%28Web_series%29_poster.jpg',
title:'Breathe',released:'2018', key:'4',desc:'Breathe is an Indian drama that explores the lives of ordinary men faced with extraordinary circumstances.The series stars R. Madhavan, Amit Sadh, Hrishikesh Joshi, Sapna Pabbi, Atharva Vishwakarma and Neena Kulkarni.'
},
{image:'https://m.media-amazon.com/images/M/MV5BNWFlNTY5MzEtNDhhMy00YTRmLWJhYjMtM2JjODkyMGRkZmUzXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg',
title:'Kota Factory',released:'2019', key:'5',desc:'Kota Factory is an Indian web series directed by Raghav Subbu for The Viral Fever (TVF).The series simultaneously premiered on TVFPlay and YouTube on 16 April 2019. It is also the first black and white web series in India.'
},



]);










   const carouselRef=useRef(null);
   const {width,height}=Dimensions.get('window');


   const renderItem=({item,index})=>{
       return (
           <View>
              <TouchableOpacity
                onPress={()=>{
                    carouselRef.current.scrollToIndex(index);
                    setBackground({
                        uri:item.image,
                        name:item.title,
                        stat:item.released,
                        desc:item.desc
                    })
                }}
              >
              <Image source={{uri:item.image}} style={styles.carouselImage} />
              
              <MaterialIcons name='library-add' size={30}  color='white' style={styles.carouselIcon}></MaterialIcons>       
              </TouchableOpacity>
           </View>
       )
   }

    return (
      <ScrollView style={{backgroundColor:'#000'}}>
      <View style={styles.carouselContentContainer}>
          <View style={{...StyleSheet.absoluteFill,backgroundColor:'#000'}}>
          
            <ImageBackground
            source={{uri:background.uri}}
            style={styles.ImageBg}
            blurRadius={10}
            >
            <View style={styles.searchBoxContainer}>
                <TextInput
                  placeholder='Search Web Series'
                  placeholderTextColor='#666'
                  style={styles.SearchBox}
                />
                <Feather  name='search' size={22}  color='#666'
                    style={styles.searchBoxIcon}
                />
            </View>

           <Text style={{color:'white',fontSize:24,fontWeight:'bold',
        marginLeft:10,marginVertical:10
        }}>Top Picks this Week</Text>
          <View style={styles.carouselContainerView}>
          <Carousel style={styles.Carousel}
          data={gallery}
          renderItem={renderItem}
          itemWidth={200}
          containerWidth={width-20}
          separatorWidth={0}
          ref={carouselRef}
          inActiveOpacity={0.4}
          />
          
   
          </View>

          <View style={styles.movieInfoContainer}>

          <View style={{justifyContent:'center'}}>
          <Text style={styles.movieName}>{background.name}</Text>
          <Text style={styles.movieStat}>{background.stat}</Text>
          </View>
          <TouchableOpacity style={styles.playIconContainer}>
             <FontAwesome5 name="play" size={22} color='#02ad94' style={
                 {marginLeft:4}
             } />
          </TouchableOpacity>

          </View>
<View style={{paddingHorizontal:14,marginTop:14}}>
<Text style={{color:'white',opacity:0.8,lineHeight:20}}>{background.desc}</Text>
</View>
            </ImageBackground>



          </View>
      
      
      </View>
      <View style={{marginHorizontal:14}}>
      <Text style={{color:'white',fontSize:24,fontWeight:"bold",marginBottom:24}}>Continue Watching</Text>
      </View>
      <ImageBackground 
      source={{uri: 'https://www.binged.com/wp-content/uploads/2020/06/Aarya-Hotstar-Review.jpg' }}
      style={{height:250,width:'100%',backgroundColor:'#000'}}
      resizeMode='cover'
      >
      <Text style={{color:'white',padding:14}}>How to train your Dragon :The Hidden World</Text>

      <TouchableOpacity style={{...styles.playIconContainer,position:'absolute',top:'40%',right:'40%'}}>
      <FontAwesome5 name="play" size={22} color='#02ad94' style={
          {marginLeft:4}
      } />
   </TouchableOpacity>
   </ImageBackground>
  
      </ScrollView>
    );
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    carouselContentContainer:{
        flex:1,
        backgroundColor:'#000',
        height:720,
        paddingHorizontal:14
    },
    ImageBg:{
        flex:1,
        height:null,
        width:null,
        opacity:1,
        justifyContent:'flex-start'
    },
    searchBoxContainer:{
        backgroundColor:'#fff',
        elevation:10,
        borderRadius:4,
        marginVertical:10,
        width:'95%',
        flexDirection:'row',
        alignSelf:'center',
        marginTop:30
    },
    SearchBox:{
        padding:12,
        paddingLeft:20,
        fontSize:16,
    },
    searchBoxIcon:{
        position:'absolute',
        right:20,
        top:14
    },
    carouselContainerView:{
        width:'100%',
        height:350,
        justifyContent:'center',
        alignItems:'center'
    },
    Carousel:{
        flex:1,
        overflow:'visible'

    },
    carouselImage:{
         width:200,
         height:320,
         borderRadius:10,
         alignSelf:'center',
         backgroundColor:'rgba(0,0,0,0.9)'
    },
    carouselText:{
        padding:14,
        color:'white',
        position:'absolute',
        bottom:10,
        left:2,
        fontWeight:'bold',
        fontSize:20
    },
    carouselIcon:{
        position:'absolute',
        top:15,
        right:15
    },
    movieInfoContainer:{
        flexDirection:'row',
        marginTop:16,
        justifyContent:'space-between',
        width:Dimensions.get('window').width-14,

    },
    movieName:{
        paddingLeft:14,
         color:'white',
        fontWeight:'bold',
        fontSize:20,
       marginBottom:6,
    },
    movieStat:{
        paddingLeft:14,
        color:'white',
        fontWeight:'bold',
        opacity:0.8
    },
    playIconContainer:{
        backgroundColor:'#212121',
        borderRadius:40,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        borderWidth:4,
        borderColor:'rgba(2,173,148,.2)',
        marginBottom:14
    }
})


export default Home;
