import { View, Text, Image, TextInput, Button, ScrollView } from 'react-native'
import {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';

export default function Home() {
    const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [chat, setChat] = useState('');

   const onPresss = (e) => {
  const tanggal = new Date().getDate();
  const bulan = new Date().getMonth();
  const tahun = new Date().getFullYear();
    const jam = new Date().getHours();
  const menit = new Date().getMinutes();
  const detik = new Date().getSeconds();

  // Menggunakan regular expression untuk menyensor kata tertentu
  const sensitiveWords = ['dog', 'pig', 'fuck', 'rough','bitch','fucking','bastard','damn','bloody','moron'];
  const censoredChat = chat.replace(new RegExp(sensitiveWords.join('|'), 'gi'), '***SENSORED***');

  var datas = {
    'nama': username,
    'emails': email,
    'message': censoredChat,
    'date': `${tahun}-${bulan}-${tanggal} ${jam}:${,}:${detik}`,
  };


  // if ( messages.length == 0 ) {
  // setMessages(datas);
  // } else {
    setMessages(old => [...old, datas]);

  // }

  setUsername('');
  setEmail('');
  setChat('');
  console.log(messages);

}

  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={['top']}>
      <StatusBar style="dark" />

      {/* punchilne and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-neutral-700"
            >
                READY TO
            </Text>
            <Text
                style={{fontSize: hp(4.5)}}
                className="font-bold tracking-wider text-rose-500"
            >
                WORKOUT
            </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
         
           
        </View>
      </View>

      {/* image slider */}
      <View>
        <ImageSlider />
      </View>

        {/* body parts list */}
      <View className="flex-1">
        <ScrollView>
            <BodyParts />

                      <View style={{marginBottom: 20, borderBottomWidth: 4,}}></View>

    <View style={{height: '7%',}} className="mx-4 relative z-50">
                <View 
                  className="flex-row justify-end items-center" 
                  style={{borderBottomWidth: 2, borderColor: 'blue'}}>
                    <TextInput 
                          value={username}
                          placeholder="Username" 
                          placeholderTextColor={'black'} 
                          onChangeText={e => setUsername(e)}
                          className="pl-6 h-10 pb-1 flex-1 text-base text-dark" 
                        />                  
                </View>
              </View>

    <View style={{height: '7%',}} className="mx-4 relative z-50">
                <View 
                  className="flex-row justify-end items-center" 
                  style={{borderBottomWidth: 2, borderColor: 'blue'}}>
                    <TextInput 
                          value={email}                        
                          placeholder="Email" 
                          onChangeText={e => setEmail(e)}
                          placeholderTextColor={'black'} 
                          className="pl-6 h-10 pb-1 flex-1 text-base text-dark" 
                        />                  
                </View>
              </View>

    <View style={{height: '7%',}} className="mx-4 relative |">
                <View 
                  className="flex-row justify-end items-center" 
                  style={{borderBottomWidth: 2, borderColor: 'blue'}}>
                    <TextInput 
                          onChangeText={message => setChat(message)} 
                          placeholder="Comentar" 
                          value={chat}
                          placeholderTextColor={'black'} 
                          className="pl-6 h-10 pb-1 flex-1 text-base text-dark" 
                        />                  
                </View>
              </View>
              <View style={{height: '7%',}} className="mx-4 relative z-50" 
  style={{marginBottom: 100}}

              >
                    <Button
  onPress={onPresss}
  title="Tambah Pesan"
  color="#841584"
  className="pl-6 h-10 pb-1 flex-1 text-base text-dark"
  accessibilityLabel="Learn more about this purple button"
/>                  
                </View>

                <View style={{borderBottomWidth: 4,}}></View>


            {messages.map((data,i) => (
               <View 
                          className="flex justify-center p-4 rounded-3xl py-3 space-y-1 mr-4" 
                          style={{}} key={i}
                        >
                          <Text className="text-dark" style={{fontWeight: 'bold', fontSize: 20}}>{data.nama}</Text>
                          <Text className="text-dark" style={{fontSize: 10, marginBottom: 10}}>
                            {data.date}
                          </Text>
                          <Text className="text-dark" style={{fontSize: 15}}>
                            {data.message}
                          </Text>
                <View style={{marginBottom: 30, borderBottomWidth: 4, borderColor: 'green', borderRadius: 100}}></View>

                </View>

          ))}

                <View style={{marginTop: 300,}}></View>

        </ScrollView>
      </View>

          



    </SafeAreaView>
  )
}