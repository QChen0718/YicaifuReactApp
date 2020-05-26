import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Dimensions
} from 'react-native';
import SwiperComponent from '../pages/SwiperHeader'
// import {NavigationContainer} from '@react-navigation/native'
// this.props.navigation 获取当前导航栏
const scrrenW = Dimensions.get('window').width
export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            dataArray: [{'key':1,'name':'张三'},{'key':2,'name':'李四'}],
            swiperImageArray:[]
        }
    }
    render(){
        return(
            <FlatList
                ListHeaderComponent={()=>(
                    <SwiperComponent/>
                )}
                data={this.state.dataArray}
                renderItem={({item,index})=>(
                    this._cellRowView(item,index)
                    
                )}
                keyExtractor={item => item.key}
            />
        );
    }
    _cellRowView(rowData,rowIndex){
        return(
            <View style={{width:scrrenW,height:40,backgroundColor:'red'}}>
                <Text style={{color:'white'}}>{rowData.name}</Text>
            </View>
        )
    }

    componentDidMount(){
        this.getHomeFromApi();
    }
    // 发起网络请求获取数据
    async getHomeFromApi() {
        try {
            let response = await fetch(
                'http://demo.itlike.com/web/xlmc/api/homeApi'
            );
            let responseJson = await response.json();
            let icon_list = responseJson.data.list[0].icon_list
            this.setState({
                swiperImageArray:icon_list
            })
            console.log(responseJson);
            
        } catch (error) {
            console.error(error);
        }
    }
}


const styles = StyleSheet.create({
    
})