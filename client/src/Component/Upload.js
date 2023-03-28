import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from "axios";
import Loader from './Loader';

export default function Upload() {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [displayInput, setDisplayInput] = useState(true);
    const [displayResult, setDisplayResult] = useState(false);
    const [malware, setMalware] = useState({});
    const [loading, setLoading] = useState(false);

    let handleOnChange = (e) => {
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    let submit = () => {
        if (file != null) {
            setDisplayInput(false);
            setLoading(true);
            const formData = new FormData();
            formData.append("image", file);
            axios.post("http://localhost:9000/upload", formData).then((res) => {
                setMalware({ type: res.data.type, class: res.data.class })
                setDisplayResult(true);
                setLoading(false);
            });
        }
    }
    let submitAgain=()=>{
        window.location.reload();
    }
    return (
        <div className='main' >
            <Navbar />
            <div>
                <div className='image'>
                    {image != null && <img className='img-fluid' src={image} alt='error' width={400}></img>}<br />
                </div>
                {displayInput && <div className="input">
                    <input type="file" className="inp" accept='image/*' onChange={handleOnChange} />
                    <button id='sub' onClick={submit}>Detect</button>
                </div>}
                {loading && <div className='input'><Loader /></div>}
                {displayResult && <div className='input'>
                    <table className='table table-bordered text-white container'>
                    <thead>
                        <tr>
                            <th>Malware Class</th>
                            <th>Malware Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{malware.type}</td>
                            <td>{malware.class}</td>
                        </tr>
                    </tbody>
                </table>
                <button id='sub' onClick={submitAgain}>Detect Again</button>
                </div> }
            </div>
        </div>
    )
}
