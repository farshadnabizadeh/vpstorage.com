import React from 'react'

const notFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>4<span>0</span>4</h1>
                </div>
                <p style={{ 'marginTop':'20px' }}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <a className='' href="#"><span className='pt-2'>Home page</span></a>
            </div>
        </div>
    )
}

export default notFound
