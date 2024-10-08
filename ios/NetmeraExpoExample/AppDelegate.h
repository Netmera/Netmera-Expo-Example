#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import <Expo/Expo.h>
#import <Netmera/Netmera.h>
#import <NetmeraCore/NetmeraPushObject.h>
#import <UserNotifications/UserNotifications.h>

@interface AppDelegate : EXAppDelegateWrapper<UNUserNotificationCenterDelegate, NetmeraPushDelegate>

@end
