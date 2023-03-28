import React from 'react'
import Navbar from './Navbar'
import cnn from '../images/cnn.png';
import resnet from '../images/resnet50.png';
import backImage from '../images/malimage.jpg';

export default function About() {
    let paraStyle = { fontSize: "large" };
    return (
        <div style={{ backgroundImage: `url(${backImage})` }}>
            <Navbar />
            <div className="document container">
                <h2>Malware</h2><br />
                <p style={paraStyle}>Malware is one of the most serious security threats on the Internet today. Malware refers to any
                    kind of malicious codes that affect the integrity, confidentiality and the functionality of the digital
                    system. Malware is separated into various classes by their functionalities i.e., Viruses, Worms,
                    Trojans, Spyware and Backdoors. These classes further divide into families based of the type of
                    variants.</p>
                <p style={paraStyle}>
                    In the following years, convolutional
                    neural networks(CNN), which are one of the important
                    components of deep learning in the field of computer vision, the use of CNN
                    networks has come to the fore in the analysis of CG images. CNN has shown superior performance
                    compared to traditional learning algorithms, especially in tasks such as image classification. We have used
                    CNN based architecture to classify the malware images into various sub-classes.
                </p>
                <h2>Dataset</h2>
                <p style={paraStyle}> We used Malevis dataset which consists of 8750 training and 3644 test malware
                    images which are classified into 25 malware classes.
                    <a href="https://web.cs.hacettepe.edu.tr/~selman/malevis/">link</a> to the dataset.
                </p>
                <h2>Results</h2>
                <h4>Resnet50</h4>
                <p style={paraStyle}>
                    Using Resnet50 model we were able to achieve an acuuracy of <b>94.5%</b> on Malevis dataset. We implemented
                    resnet50 using transfer learning from keras and tensorflow library. Transfer Learnign allows us to use
                    weights learnt convolutional neural networks like Resnet, Inception or VGG and fine tune it for your image
                    data. <br /> Below is the truth table achieved using CNN where zero to
                    24 represents the 25 different malware classes.<br />
                </p>
                <h5>Confusion Matrix:</h5>
                <img className='img-fluid' src={resnet} alt="error" width="800"/>
                <br></br>
                <h4>CNN</h4>
                <p style={paraStyle}>
                    Using normal CNN architecture we were able to achieve an acuuracy of <b>93.20%</b> on Malevis dataset. The
                    CNN architecture consists
                    of two convolution layers and three dense layers. Below is the truth table achieved using CNN where zero to
                    24 represents the 25 different malware classes.<br />
                </p>
                <h5>Confusion Matrix:</h5>
                <img className='img-fluid' src={cnn} alt="error" width="800" />
            </div>
        </div >
    )
}
