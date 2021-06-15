import React,{FC} from 'react'


const Footer:FC = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6">
                        {new Date().getFullYear()} © Skote.
                    </div>
                    <div className="col-sm-6">
                        <div className="text-sm-end d-none d-sm-block">
                            CRM desenvolvido pela SNIR Soluctions
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
