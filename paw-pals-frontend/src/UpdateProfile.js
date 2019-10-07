import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ActiveStorageProvider from 'react-activestorage-provider'

export default class UpdateProfile extends Component {
    constructor(props){
        super(props)
        const { cat } = props
        this.state = {
            cat
        }
    }
    
    handleSubmit = cat => {
        this.setState({ cat })
    }
    
    render(){
        const { cat } = this.state
        const BASE = '18.222.224.3'
        return(
            <React.Fragment>
                { cat && cat.avatar_url &&
                    <div>
                        <h3>Your avatar is: </h3>
                        <img src={cat.avatar_url} />
                    </div>
                }
                <ActiveStorageProvider
                    endpoint={{
                        path: `/cats/${cat.id}`,
                        host: BASE,
                        port: '3000',
                        protocol: 'http',
                        model: 'Cat',
                        attribute: 'avatar',
                        method: 'PUT',
                    }}
                    onSubmit={this.handleSubmit}
                    render={({ handleUpload, uploads, ready }) => (
                        <div>
                            <input
                                type="file"
                                disabled={!ready}
                                onChange={e => handleUpload(e.currentTarget.files)}
                            />
                            
                            {uploads.map(upload => {
                                switch (upload.state) {
                                    case 'waiting':
                                        return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                                    case 'uploading':
                                        return (
                                            <p key={upload.id}>
                                                Uploading {upload.file.name}: {upload.progress}%
                                            </p>
                                        )
                                    case 'error':
                                        return (
                                            <p key={upload.id}>
                                                Error uploading {upload.file.name}: {upload.error}
                                            </p>
                                        )
                                    case 'finished':
                                        return (
                                            <p key={upload.id}>Finished uploading {upload.file.name}</p>
                                        )
                                }
                            })}
                        </div>
                    )}
                />
            </React.Fragment>
        )
    }
    
}