
// import React from 'react';
// import { useParams } from 'react-router-dom';

// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { APP_ID, SERVER_SECRET } from './constant';
// const VideoPage = () => {
//     const {id} = useParams();
//     const roomID = id;
//       let myMeeting = async (element) => {
//      // generate Kit Token
//       const appID = APP_ID;
//       const serverSecret = SERVER_SECRET;
//       const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Sushant");

    
//      // Create instance object from Kit Token.
//       const zp = ZegoUIKitPrebuilt.create(kitToken);
//       // start the call
//       zp.joinRoom({
//         container: element,
//         sharedLinks: [
//           {
//             name: 'Copy link',
//             url:
//              window.location.protocol + '//' + 
//              window.location.host + window.location.pathname +
//               '?roomID=' +
//               roomID,
//           },
//         ],
//         scenario: {
//           mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
//         },
//       });
//     }
//     return (
//         <div ref={myMeeting}> 

//         </div>
//     )
// }
// export default VideoPage;






import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { APP_ID, SERVER_SECRET } from './constant';

const VideoPage = () => {
    const { id } = useParams();
    const roomID = id;
    const meetingContainer = useRef(null); // Create a ref for the container

    useEffect(() => {
        const initMeeting = async () => {
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                APP_ID,
                SERVER_SECRET,
                roomID,
                Date.now().toString(),
                'Sushant'
            );

            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container: meetingContainer.current, // Attach to the container ref
                sharedLinks: [
                    {
                        name: 'Copy link',
                        url:
                            `${window.location.protocol}//${window.location.host}/room/${roomID}`,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
        };

        initMeeting();
    }, [roomID]); // Run effect when roomID changes

    return <div ref={meetingContainer} style={{ width: '100%', height: '100vh' }} />;
};

export default VideoPage;
