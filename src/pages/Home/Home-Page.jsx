/************************** Import library/fungsi ****************************/
import React from 'react';

import {
    BatteryInfo,
    //ElectricPower,
    //EmbeddedData,
    //ParameterAdjusment,
    //RoomTemperature,
    SetupContainer} from '../../components';

    import './Home-Page.css';

import useFetchFirestore from '../../hooks/useFetchFirestore';

// mount firebase sekali saja dalam aplikasi, tetapi di dalam folder ./src
import firebase from '../../firestore/firebase';

/************************ Deklarasi objek/variabel ***************************/
export var firestoreDbRef = firebase.firestore();

/************************ Deklarasi kelas/komponen ***************************/
function HomePage(){
    const [data_status] = useFetchFirestore('Status');
    const [data_voltage] = useFetchFirestore('Voltage');
    const [data_information] = useFetchFirestore('Unit-Description');
    
    return(
        <section className="home-container">
            <SetupContainer FirestoreData={data_status.firestoreData}/>
            <BatteryInfo FirestoreVoltage={data_voltage.firestoreData} FirestoreInformation={data_information.firestoreData}/>
            {/* <ParameterAdjusment FirestoreData={data.firestoreData}/> */}
            {/* <RoomTemperature FirestoreData={data.firestoreData}/> */}
            {/* <ElectricPower FirestoreData={data.firestoreData}/> */}
            {/* <EmbeddedData/> */}
        </section>
    )
}

export default React.memo(HomePage);