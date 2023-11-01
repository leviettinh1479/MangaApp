import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import { FlatList, View, Text, StyleSheet,ScrollView } from 'react-native';
import { data_ItemExample } from './item/Data';
import ItemManga from './item/ItemMangaFavourite';
import ItemMangaSearch from './item/ItemMangaSearch';
import ListSearchScreen from '../screens/ListSearchScreen';


interface Item {
    data: any;
    onSearch: any;
    onpress?: () => void
}
const SearchComponent: React.FC<{ data: string[],onpress?: () => void }> = ({ data,onpress }) => {
    const [searchText, setSearchText] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [filteredData, setFilteredData] = useState<string[]>([]);
  
    const handleSearch = (text: string) => {
      setSearchText(text);
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    //  setShowResults(true);
      
    };
    const handleBlur = () => {
        // Xử lý sự kiện khi thanh tìm kiếm bị unfocus
      //  setShowResults(false);
        setSearchText("");
      };
      
  
    return (
      <View>
        <Searchbar
          placeholder="Tìm kiếm..."
          onChangeText={handleSearch}
          value={searchText}
        //  onFocus={() => navigation}
        //  onBlur={handleBlur}
          elevation={4}
          onIconPress={onpress}
          style={[{backgroundColor:'#ffffff',marginTop:24,marginHorizontal:5},styles.borderSearch]}
        />
       
      </View>
    );
  };
  
  export default SearchComponent;
  const styles = StyleSheet.create({
    borderSearch: {
      paddingHorizontal:16,
      backgroundColor:'#ffffff',
      borderRadius:8,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
        },
       
  
    
  })