import ticketScan from './ticket_scan.png';
import './App.css';
import html2pdf from 'html2pdf.js/dist/html2pdf.min.js';
import React, { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        type: 0,
        ImNo: "",
        site: "",
        empNo: "",
        email: "",
        phone: "",
        contact: "",
        milage: 0,
        milage_rate: 1.60,
        labor_cost: 800,
        AWC_kits: '',
        AWP_kits: '',
        primary_kit: '',
        lsd: '',
        monitored_YN: false,
        devices_tested_YN: false,
        total_lines: '',
        lines_tested_YN: false,
        ptz: '',
        doghouse_phones: '',
        stationaries: '',
        shack_phones: '',
        outdoor_APs: '',
        indoor_APs: '',
        wifi_APs: '',
        shack_boosters: '',
        data_lines: '',
        phone_lines: '',
        portable: '',
        batteries: '',
        truck_shack: '',
        chargers: '',
        donor_azimuth: '',
        area_fill_azimuth: '',
        cell_frequency: '',
        uplink: '',
        downlink: '',
        rx: '',
        tx: '',
        tx_compression: '',
        rssi_inside: '',
        rssi_outside: '',
        lat_long: '',
        pkg_picked_up: false,
        pkg_scanned_truck: false,
        pkg_scanned_emp: false,
        pkg_delivered: false,
        pkg_set_up: false,
        gen_hours: '',
        gen_maint_complete: false,
        notes: '',
        completed_by: '',
        ticket_no: 'A 00000',

        cameras: false,
        generator: false,
        lights: false,
        rigphones: false,
        wifi: false,
        intercom: false,
        radios: false,
        cellrepeater: false,
        rig: false,
        tower: false,
        hotshot: false,
        laptoppackage: false,
    });

    const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
    }));
    };

    function formatToTwoDecimals(value) {
        const num = parseFloat(value);
        if (isNaN(num)) return "0.00";
        return num.toFixed(2);
    }



    const handleClick = () => {
        var element = document.getElementById('pdf-container');

        const today = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Edmonton' };
        const formatted = today.toLocaleDateString('en-US', options);

        html2pdf(element).save(formatted+'-'+formData.empNo+'-'+formData.site+'-'+formData.ImNo+'-ticket.pdf');
    };

    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Edmonton' };
    const formatted = today.toLocaleDateString('en-US', options);

    return (
        <>
            <form className="max-w-md mx-auto p-4 bg-white rounded-2xl shadow-md space-y-4">
                <h2 className="text-xl font-semibold text-center">General</h2>

                {["Rig Up", "Rig Out", "Rig Move", "Repair", "Service/Check"].map((option, index) => (
                    <label style={{paddingRight: '30px'}} key={index} className="block">
                    <input
                        type="radio"
                        name="type"
                        value={index}
                        checked={formData.type == index}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    {option}
                    <br/>
                    </label>
                ))}

                <br/>

                <input
                    type="text"
                    name="ImNo"
                    placeholder="IM No"
                    value={formData.ImNo}
                    onChange={handleChange}
                    className="w-full shared-input p-2 border rounded"
                />
                <input
                    type="text"
                    name="site"
                    placeholder="Site"
                    value={formData.site}
                    onChange={handleChange}
                    className="w-full shared-input p-2 border rounded"
                />
                <input
                    type="text"
                    name="empNo"
                    placeholder="Emp No"
                    value={formData.empNo}
                    onChange={handleChange}
                    className="w-full shared-input p-2 border rounded"
                />
                <h2 className="text-xl font-semibold text-center">Contact</h2>
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full shared-input p-2 border rounded"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full shared-input p-2 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full shared-input p-2 border rounded"
                />
                <h2 className="text-xl font-semibold text-center">Billing</h2>
                <input
                    type="text"
                    name="milage"
                    placeholder="Milage"
                    value={formData.milage}
                    onChange={handleChange}
                    className="w-full shared-input p-2 border rounded"
                />
                <input
                    type="text"
                    name="milage_rate"
                    placeholder="Milage Rate"
                    value={formData.milage_rate}
                    onChange={handleChange}
                    className="w-full shared-input p-2 border rounded"
                />
                <input
                    type="text"
                    name="labor_cost"
                    placeholder="Labor Cost"
                    value={formData.labor_cost}
                    onChange={handleChange}
                    className="w-full shared-input p-2 border rounded"
                />

                <label>
                <h2 className="text-xl font-semibold text-center">
                <input
                    type="checkbox"
                    name="cameras"
                    checked={formData.cameras}
                    onChange={handleChange}
                />
                Cameras</h2></label>
                {formData.cameras &&
                <>
                    <input name="AWC_kits" placeholder="# of AWC Kits" value={formData.AWC_kits} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="ptz" placeholder="# of PTZ's" value={formData.ptz} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="stationaries" placeholder="# of Stationaries" value={formData.stationaries} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                </>}

                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="generator"
                        checked={formData.generator}
                        onChange={handleChange}
                    />    
                Generator</h2></label>
                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="lights"
                        checked={formData.lights}
                        onChange={handleChange}
                    />    
                Lights</h2></label>
                {(formData.lights || formData.generator) &&
                <>
                    <input name="gen_hours" placeholder="Generator Hours" value={formData.gen_hours} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <br/>
                    <label><input type="checkbox" name="gen_maint_complete" placeholder="" value={formData.gen_maint_complete} onChange={handleChange} className="w-full shared-input p-2 border rounded" /> Gen Maintenance Completed</label>
                </>}

                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="rigphones"
                        checked={formData.rigphones}
                        onChange={handleChange}
                    />    
                Rig Phones</h2></label>
                {formData.rigphones &&
                <>
                    <input name="AWP_kits" placeholder="# of AWP Kits" value={formData.AWP_kits} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="doghouse_phones" placeholder="# of Doghouse Phones" value={formData.doghouse_phones} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="shack_phones" placeholder="# of Shack Phones" value={formData.shack_phones} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="total_lines" placeholder="Total Lines" value={formData.total_lines} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <br/>
                    <label><input type="checkbox" name="lines_tested_YN" placeholder="All Lines Tested (Y/N)" value={formData.lines_tested_YN} onChange={handleChange} className="w-full shared-input p-2 border rounded" />All Lines Tested</label>
                </>}

                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="wifi"
                        checked={formData.wifi}
                        onChange={handleChange}
                    />    
                Wifi</h2></label>
                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="intercom"
                        checked={formData.intercom}
                        onChange={handleChange}
                    />    
                Intercom</h2></label>
                {(formData.intercom || formData.wifi) &&
                <>
                    <input name="primary_kit" placeholder="Primary Kit" value={formData.primary_kit} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="outdoor_APs" placeholder="# of Outdoor AP's" value={formData.outdoor_APs} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="indoor_APs" placeholder="# of Indoor AP's" value={formData.indoor_APs} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="wifi_APs" placeholder="# of AP's w/ WIFI" value={formData.wifi_APs} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <br/>
                    <label><input type="checkbox" name="devices_tested_YN" placeholder="All Devices Tested (Y/N)" value={formData.devices_tested_YN} onChange={handleChange} className="w-full shared-input p-2 border rounded" />All Devices Tested</label>
                </>}

                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="radios"
                        checked={formData.radios}
                        onChange={handleChange}
                    />    
                Radios</h2></label>
                {formData.radios &&
                <>
                    <input name="portable" placeholder="# of Portable" value={formData.portable} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="batteries" placeholder="# of Batteries" value={formData.batteries} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="truck_shack" placeholder="# of Truck/Shack" value={formData.truck_shack} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="chargers" placeholder="# of Chargers" value={formData.chargers} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                </>}

                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="callrepeater"
                        checked={formData.callrepeater}
                        onChange={handleChange}
                    />    
                Cell Repeater</h2></label>
                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="rig"
                        checked={formData.rig}
                        onChange={handleChange}
                    />    
                Rig</h2></label>
                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="tower"
                        checked={formData.tower}
                        onChange={handleChange}
                    />    
                Tower</h2></label>
                {(formData.callrepeater || formData.rig || formData.tower) &&
                <>
                    <label><input type="checkbox" name="monitored_YN" placeholder="Monitored (Y/N)" value={formData.monitored_YN} onChange={handleChange} className="w-full shared-input p-2 border rounded" />Monitored</label>
                    <br/>
                    <input name="lsd" placeholder="Surface LSD" value={formData.lsd} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="donor_azimuth" placeholder="Donor Azimuth" value={formData.donor_azimuth} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="area_fill_azimuth" placeholder="Area Fill Azimuth" value={formData.area_fill_azimuth} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="cell_frequency" placeholder="Cell Frequency (850/1960)" value={formData.cell_frequency} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <br/>
                    <input name="uplink" placeholder="Uplink (dB)" value={formData.uplink} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="downlink" placeholder="Downlink (dB)" value={formData.downlink} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="rssi_inside" placeholder="RSSI Inside (dBm)" value={formData.rssi_inside} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="rssi_outside" placeholder="RSSI Outside (dBm)" value={formData.rssi_outside} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                    <input name="shack_boosters" placeholder="# of Shack Boosters" value={formData.shack_boosters} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                </>}

                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="hotshot"
                        checked={formData.hotshot}
                        onChange={handleChange}
                    />    
                Hotshot</h2></label>
                <label>
                <h2 className="text-xl font-semibold text-center">
                    <input
                        type="checkbox"
                        name="laptoppackage"
                        checked={formData.laptoppackage}
                        onChange={handleChange}
                    />    
                Laptop Package</h2></label>
                {(formData.hotshot || formData.laptoppackage) &&
                <>
                <label><input type="checkbox" name="pkg_picked_up" placeholder="Pkg Picked Up (Y/N)" value={formData.pkg_picked_up} onChange={handleChange} className="w-full shared-input p-2 border rounded" />Pkg Picked Up</label><br/>
                <label><input type="checkbox" name="pkg_scanned_truck" placeholder="Pkg Scanned to Truck (Y/N)" value={formData.pkg_scanned_truck} onChange={handleChange} className="w-full shared-input p-2 border rounded" />Pkg Scanned to Truck</label><br/>
                <label><input type="checkbox" name="pkg_scanned_emp" placeholder="Pkg Scanned to EmpNo (Y/N)" value={formData.pkg_scanned_emp} onChange={handleChange} className="w-full shared-input p-2 border rounded" />Pkg Scanned to EmpNo</label><br/>
                <label><input type="checkbox" name="pkg_delivered" placeholder="Pkg Delivered (Y/N)" value={formData.pkg_delivered} onChange={handleChange} className="w-full shared-input p-2 border rounded" />Pkg Delivered</label><br/>
                <label><input type="checkbox" name="pkg_set_up" placeholder="Pkg Set Up (Y/N)" value={formData.pkg_set_up} onChange={handleChange} className="w-full shared-input p-2 border rounded" />Pkg Set Up</label>
                </>}

                <h2 className="text-xl font-semibold text-center">Notes</h2>
                <textarea name="notes" placeholder="Notes" style={{width: '551px', height: '123px'}} value={formData.notes} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                
                <h2 className="text-xl font-semibold text-center">Completed By</h2>
                <input name="completed_by" placeholder="Completed By" value={formData.completed_by} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                <input name="ticket_no" placeholder="Ticket #" value={formData.ticket_no} onChange={handleChange} className="w-full shared-input p-2 border rounded" />
                

                <br/>
            </form>
            <br/>
            <button 
            onClick={handleClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                download
            </button>
            <br/>
            <br/>
            <div className="App" id="pdf-container" style={{
                width: '210mm',
                height: '296mm',
                color: 'black',
                fontFamily: 'Arial, sans-serif',
                boxSizing: 'border-box',
                backgroundImage: 'url('+ticketScan+')',
                backgroundSize: '100% 100%',
                position: 'relative'
            }}>
                <div
                className="shared-text"
                style={{
                    position: 'absolute',
                    top: '15px',
                    left: '550px',
                    width: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    fontSize: '14px',
                    color: 'black'
                }}
                >
                <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Rig Up
                    <input type="radio" name="choice" value="1" checked={formData.type == 0} />
                </label>
                <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Rig Out
                    <input type="radio" name="choice" value="2" checked={formData.type == 1} />
                </label>
                <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Rig Move
                    <input type="radio" name="choice" value="3" checked={formData.type == 2} />
                </label>
                <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Repair
                    <input type="radio" name="choice" value="4" checked={formData.type == 3} />
                </label>
                <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                    Service/Check
                    <input type="radio" name="choice" value="5" checked={formData.type == 4} />
                </label>
                </div>


                <br/>

                <p className="shared-text" style={{top: '139px', left: '56px'}}>{formatted}</p>
                <p className="shared-text" style={{top: '142px', left: '232px'}}>{formData.ImNo}</p>
                <p className="shared-text" style={{top: '143px', left: '390px'}}>{formData.site}</p>
                <p className="shared-text" style={{top: '143px', left: '636px'}}>{formData.empNo}</p>

                <p className="shared-text" style={{top: '165px', left: '79px'}}>{formData.contact}</p>
                <p className="shared-text" style={{top: '168px', left: '278px'}}>{formData.phone}</p>
                <p className="shared-text" style={{top: '170px', left: '466px'}}>{formData.email}</p>

                <p className="shared-text" style={{top: '191px', left: '78px'}}>{formData.milage}</p>
                <p className="shared-text" style={{top: '192px', left: '204px'}}>{formatToTwoDecimals(formData.milage_rate)}</p>
                <p className="shared-text" style={{top: '195px', left: '360px'}}>{formatToTwoDecimals(parseFloat(formData.milage) * parseFloat(formData.milage_rate))}</p>
                <p className="shared-text" style={{top: '195px', left: '484px'}}>{formatToTwoDecimals(formData.labor_cost)}</p>
                <p className="shared-text" style={{top: '195px', left: '650px'}}>{formatToTwoDecimals(parseFloat(formData.labor_cost) + (parseFloat(formData.milage) * parseFloat(formData.milage_rate)))}</p>

                {formData.cameras && <>
                <input type="checkbox" className="shared-text" checked={true} style={{top: '238px', left: '84px', width: '12px'}}/>
                <p className="shared-text" style={{top: '240px', left: '112px'}}>{formData.AWC_kits}</p>
                <p className="shared-text" style={{top: '255px', left: '92px'}}>{formData.ptz}</p>
                <p className="shared-text" style={{top: '274px', left: '126px'}}>{formData.stationaries}</p>
                </>}

                {(formData.generator || formData.lights) && <>
                {formData.generator &&
                <input type="checkbox" className="shared-text" checked={true} style={{top: '481px', left: '98px', width: '12px'}}/>}
                {formData.lights &&
                <input type="checkbox" className="shared-text" checked={true} style={{top: '481px', left: '156px', width: '12px'}}/>}
                <p className="shared-text" style={{top: '483px', left: '130px'}}>{formData.gen_hours}</p>
                <p className="shared-text" style={{top: '501px', left: '226px'}}>{formData.gen_maint_complete ? "Yes" : "No"}</p>
                </>}

                {(formData.rigphones) && <>
                <input type="checkbox" className="shared-text" checked={true} style={{top: '240px', left: '347px', width: '12px'}}/>
                <p className="shared-text" style={{top: '241px', left: '350px', }}>{formData.AWP_kits}</p>
                <p className="shared-text" style={{top: '259px', left: '394px'}}>{formData.doghouse_phones}</p>
                <p className="shared-text" style={{top: '275px', left: '371px'}}>{formData.shack_phones}</p>
                <p className="shared-text" style={{top: '292px', left: '348px'}}>{formData.total_lines}</p>
                <p className="shared-text" style={{top: '311px', left: '400px'}}>{formData.lines_tested_YN ? "Yes" : "No"}</p>
                </>}


                {(formData.wifi || formData.intercom) && <>
                {formData.wifi &&
                <input type="checkbox" className="shared-text" checked={true} style={{top: '343px', left: '305px', width: '12px'}}/>}
                {formData.intercom &&
                <input type="checkbox" className="shared-text" checked={true} style={{top: '343px', left: '383px', width: '12px'}}/>}
                <p className="shared-text" style={{top: '344px', left: '358px'}}>{formData.primary_kit}</p>
                <p className="shared-text" style={{top: '362px', left: '370px'}}>{formData.outdoor_APs}</p>
                <p className="shared-text" style={{top: '380px', left: '362px'}}>{formData.indoor_APs}</p>
                <p className="shared-text" style={{top: '397px', left: '367px'}}>{formData.wifi_APs}</p>
                <p className="shared-text" style={{top: '416px', left: '414px'}}>{formData.devices_tested_YN ? "Yes" : "No"}</p>
                </>}


                {(formData.radios) && <>
                <input type="checkbox" className="shared-text" checked={true} style={{top: '448px', left: '322px', width: '12px'}}/>
                <p className="shared-text" style={{top: '449px', left: '359px'}}>{formData.portable}</p>
                <p className="shared-text" style={{top: '468px', left: '360px'}}>{formData.batteries}</p>
                <p className="shared-text" style={{top: '485px', left: '377px'}}>{formData.truck_shack}</p>
                <p className="shared-text" style={{top: '502px', left: '360px'}}>{formData.chargers}</p>
                </>}


                {(formData.callrepeater || formData.rig || formData.tower) && <>
                {formData.callrepeater &&
                <input type="checkbox" className="shared-text" checked={true} style={{top: '242px', left: '610px', width: '12px'}}/>}
                {formData.rig &&
                <input type="checkbox" className="shared-text" checked={true} style={{top: '242px', left: '650px', width: '12px'}}/>}
                {formData.tower &&
                <input type="checkbox" className="shared-text" checked={true} style={{top: '243px', left: '710px', width: '12px'}}/>}
                <p className="shared-text" style={{top: '243px', left: '628px'}}>{formData.monitored_YN ? "Yes" : "No"}</p>
                <p className="shared-text" style={{top: '260px', left: '601px'}}>{formData.lsd}</p>
                <p className="shared-text" style={{top: '277px', left: '620px'}}>{formData.donor_azimuth}</p>
                <p className="shared-text" style={{top: '294px', left: '630px'}}>{formData.area_fill_azimuth}</p>
                <p className="shared-text" style={{top: '312px', left: '678px'}}>{formData.cell_frequency}</p>
                <p className="shared-text" style={{top: '330px', left: '599px'}}>{formData.uplink}</p>
                <p className="shared-text" style={{top: '347px', left: '613px'}}>{formData.downlink}</p>
                <p className="shared-text" style={{top: '364px', left: '630px'}}>{formData.rssi_inside}</p>
                <p className="shared-text" style={{top: '381px', left: '640px'}}>{formData.rssi_outside}</p>
                <p className="shared-text" style={{top: '399px', left: '628px'}}>{formData.shack_boosters}</p>
                </>}


                {(formData.hotshot || formData.laptoppackage) && <>
                {formData.hotshot &&
                <input type="checkbox" className="shared-text" checked={true} style={{top: '432px', left: '583px', width: '12px'}}/>}
                {formData.laptoppackage &&
                <input type="checkbox" className="shared-text" checked={true} style={{top: '434px', left: '673px', width: '12px'}}/>}
                <p className="shared-text" style={{top: '433px', left: '644px'}}>{formData.pkg_picked_up ? "Yes" : "No"}</p>
                <p className="shared-text" style={{top: '451px', left: '680px'}}>{formData.pkg_scanned_truck ? "Yes" : "No"}</p>
                <p className="shared-text" style={{top: '469px', left: '690px'}}>{formData.pkg_scanned_emp ? "Yes" : "No"}</p>
                <p className="shared-text" style={{top: '486px', left: '641px'}}>{formData.pkg_delivered ? "Yes" : "No"}</p>
                <p className="shared-text" style={{top: '503px', left: '627px'}}>{formData.pkg_set_up ? "Yes" : "No"}</p>
                </>}


                <p className="shared-text" style={{top: '540px', left: '40px', width: '706px', whiteSpace: 'pre-wrap'}}>{formData.notes}</p>
                <p className="shared-text" style={{top: '765px', left: '520px', width: '300px'}}>{formData.completed_by}</p>
                <p className="shared-text" style={{top: '1040px', left: '356px', width: '300px', fontSize: '26px', fontFamily: 'Times New Roman', color: '#333333'}}>{formData.ticket_no}</p>
            </div>
        </>
    );
}

export default App;
