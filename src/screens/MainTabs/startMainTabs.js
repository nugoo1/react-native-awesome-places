import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "map" : "map", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "place" : "place", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "menu" : "menu", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "awesome-places.FindPlaceScreen",
                    label: "Find Place",
                    title: "Find Place",
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                },
                {
                    screen: "awesome-places.SharePlaceScreen",
                    label: "Share Place",
                    title: "Share Place",
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                title: "Menu",
                                id: "sideDrawerToggle"
                            }
                        ]
                    }
                }
            ],
            tabsStyle: { 
                tabBarButtonColor: "orange"
              },
            drawer: {
                left: {
                    screen: "awesome-places.SideDrawer"
                }
            },
            appStyle: {
                tabBarButtonColor: "white",
                tabBarSelectedButtonColor: "orange",
                tabBarBackgroundColor: 'black'
            }
        });
    })
};

export default startTabs;