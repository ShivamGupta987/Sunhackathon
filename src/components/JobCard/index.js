import React, { Component } from 'react';
import Header from '../Header';
import './index.css';  // Assuming you will define specific styles for JobCard
import Swal from 'sweetalert2';

class JobCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            uploadProgress: 0,
            isUploading: false,
            uploadComplete: false,
        };
    }

    handleFileChange = (event) => {
        this.setState({ file: event.target.files[0], uploadProgress: 0, uploadComplete: false });
    };

    handleUpload = () => {
        const { file } = this.state;
        if (!file) return;
    
        this.setState({ isUploading: true, uploadComplete: false });
        const interval = setInterval(() => {
            this.setState(prevState => {
                const newProgress = prevState.uploadProgress + 10;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    this.setState({ uploadProgress: 100, isUploading: false, uploadComplete: true },
                        () => Swal.fire({
                            title: 'Success!',
                            text: 'Your resume has been uploaded successfully!',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    );
                    return;
                }
                return { uploadProgress: newProgress };
            });
        }, 100);
    };
    
    render() {
        const { file, uploadProgress, isUploading, uploadComplete } = this.state;
        return (
            <>
            <Header /> 
            <div className="job-card">
                <h2>Job Application</h2>
                <section className="job-description">
                    <h4>Job Description</h4>
                    <p>Apply for the exciting role of Software Developer at our innovative company. We are looking for creative and driven individuals to join our team.</p>
                </section>
                <section className="file-upload">
                    <h4>Upload Your Resume</h4>
                    {!uploadComplete && ( // Only show upload components if upload not complete
                        <>
                            <input type="file" onChange={this.handleFileChange} disabled={isUploading} />
                            {file && (
                                <button onClick={this.handleUpload} disabled={isUploading}>
                                    {isUploading ? `Uploading ${uploadProgress}%` : 'Upload'}
                                </button>
                            )}
                            {isUploading && <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>}
                        </>
                    )}
                    {uploadComplete && <div className="upload-complete-message">Upload Complete!</div>}
                </section>
            </div>
            </>
        );
    }
}

export default JobCard;
