/************************** Import library/fungsi ****************************/
import React from 'react';
import {ValueSimpleContainer} from '../../Level-1';
import './Battery-Info.css';

/************************ Deklarasi objek/variabel ***************************/

/************************ Deklarasi kelas/komponen ***************************/
function BatteryInfo(props){

    return(
        <section className="temperatur-holder">
            <section className="title-pos">
                <h1 className="title">Voltage Monitoring</h1>
            </section>
            <hr className="temperature-separator"/>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Baterai 1" value={props.FirestoreVoltage.V1} unit="V" information={props.FirestoreInformation.UD1}/>
                <ValueSimpleContainer title="Baterai 2" value={props.FirestoreVoltage.V2} unit="V" information={props.FirestoreInformation.UD2}/>
                <ValueSimpleContainer title="Baterai 3" value={props.FirestoreVoltage.V3} unit="V" information={props.FirestoreInformation.UD3}/>
                <ValueSimpleContainer title="Baterai 4" value={props.FirestoreVoltage.V4} unit="V" information={props.FirestoreInformation.UD4}/>
            </section>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Baterai 5" value={props.FirestoreVoltage.V5} unit="V" information={props.FirestoreInformation.UD5}/>
                <ValueSimpleContainer title="Baterai 6" value={props.FirestoreVoltage.V6} unit="V" information={props.FirestoreInformation.UD6}/>
                <ValueSimpleContainer title="Baterai 7" value={props.FirestoreVoltage.V7} unit="V" information={props.FirestoreInformation.UD7}/>
                <ValueSimpleContainer title="Baterai 8" value={props.FirestoreVoltage.V8} unit="V" information={props.FirestoreInformation.UD8}/>
            </section>
            <section className="title-pos">
                <h1 className="title">Current Monitoring</h1>
            </section>
            <hr className="temperature-separator"/>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Baterai 1" value={props.FirestoreVoltage.Current1} unit="A"/>
                <ValueSimpleContainer title="Baterai 2" value={props.FirestoreVoltage.Current2} unit="A"/>
                <ValueSimpleContainer title="Baterai 3" value={props.FirestoreVoltage.Current3} unit="A"/>
                <ValueSimpleContainer title="Baterai 4" value={props.FirestoreVoltage.Current4} unit="A"/>
            </section>
            <section className="title-pos">
                <h1 className="title">Temperature Monitoring</h1>
            </section>
            <hr className="temperature-separator"/>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Baterai 1" value={props.FirestoreVoltage.Temperature1} unit="*C" information={props.FirestoreInformation.UD1}/>
                <ValueSimpleContainer title="Baterai 2" value={props.FirestoreVoltage.Temperature2} unit="*C" information={props.FirestoreInformation.UD2}/>
                <ValueSimpleContainer title="Baterai 3" value={props.FirestoreVoltage.Temperature3} unit="*C" information={props.FirestoreInformation.UD3}/>
                <ValueSimpleContainer title="Baterai 4" value={props.FirestoreVoltage.Temperature4} unit="*C" information={props.FirestoreInformation.UD4}/>
            </section>
            <section className="temperatur-content-holder">
                <ValueSimpleContainer title="Baterai 5" value={props.FirestoreVoltage.Temperature5} unit="*C" information={props.FirestoreInformation.UD5}/>
                <ValueSimpleContainer title="Baterai 6" value={props.FirestoreVoltage.Temperature6} unit="*C" information={props.FirestoreInformation.UD6}/>
                <ValueSimpleContainer title="Baterai 7" value={props.FirestoreVoltage.Temperature7} unit="*C" information={props.FirestoreInformation.UD7}/>
                <ValueSimpleContainer title="Baterai 8" value={props.FirestoreVoltage.Temperature8} unit="*C" information={props.FirestoreInformation.UD8}/>
            </section>
        </section>
        
    );
}


export default React.memo(BatteryInfo);