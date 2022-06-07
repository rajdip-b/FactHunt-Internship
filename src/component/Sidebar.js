import './css/Sidebar.css';

const Sidebar = (props) => {

    const classes = props.className+" container sidebar";

    return <div className={classes}>
        <div className='row company p-4'>
            <img className='col-3 col company__icon' src='https://media.istockphoto.com/vectors/cross-health-care-logo-template-illustration-design-vector-eps-10-vector-id1222982100?k=20&m=1222982100&s=612x612&w=0&h=rJR3d9Y8vxY4kEPPrTIkKY-r8MqEpvq-ZOsrFvMMq1Q=' height={40}/>
            <span className='company__text col-7 align-middle'>FactHunt</span>
            <img className='col-2 mt-2' src='https://icons.veryicon.com/png/o/miscellaneous/godserver/expand-sidebar.png' height={30}/>
        </div>
        <div className='row hoverable profile p-4 mb-3'>
            <img className='col-3 profile__picture' src='https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg' height={40}/>
            <span className='col-5 profile__name'>Profile</span>
            <span className='col-2 profile__task'>12</span>
            <img  className='col-2 profile__notification mt-2' src='https://i.dlpng.com/static/png/6974197_preview.png' height={25}/>
        </div>
        <div className='row hoverable discover sidebar__elements'>
            <img className='col-3' height={45} src='https://www.pngfind.com/pngs/m/60-602648_drawn-globe-grid-region-1-logo-png-transparent.png'/>
            <span className='col-7 mt-2'>Discover</span>
            <span className='col-2 discover__notifications'>24</span>
        </div>
        <div className='row hoverable discover sidebar__elements'>
            <img className='col-3' height={45} src='https://static.vecteezy.com/system/resources/previews/001/191/844/non_2x/circle-png.png'/>
            <span className='col-7 mt-2'>SmartUp</span>
        </div>
        <div className='row hoverable discover sidebar__elements'>
            <img className='col-3' height={45} src='https://static.vecteezy.com/system/resources/previews/001/191/844/non_2x/circle-png.png'/>
            <span className='col-7 mt-2'>Main community</span>
        </div>
        <div className='row hoverable discover sidebar__elements'>
            <img className='col-3' height={45} src='https://static.vecteezy.com/system/resources/previews/001/191/844/non_2x/circle-png.png'/>
            <span className='col-7 mt-2'>Run community</span>
        </div>
        <div className='row hoverable discover sidebar__elements'>
            <img className='col-3' height={45} src='https://static.vecteezy.com/system/resources/previews/001/191/844/non_2x/circle-png.png'/>
            <span className='col-7 mt-2'>Tech community</span>
        </div>
        <div className='row hoverable discover sidebar__elements'>
            <img className='col-3' height={45} src='https://static.vecteezy.com/system/resources/previews/001/191/844/non_2x/circle-png.png'/>
            <span className='col-7 mt-2'>Lead Community</span>
        </div>
        <div>
            <div className='row p-4'>
                <img className='col-2' src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'/>
                <span className='col-10'>Personal</span>
            </div>
            <div className='row ms-5 ps-2'>
                <span className='col-5 profile__task'>In progress</span>
                <span className='col-2 profile__task'>120</span>
            </div>
            <div className='row ms-5 ps-2'>
                <span className='col-5 profile__task'>Completed</span>
                <span className='col-2 profile__task'>12</span>
            </div>
            <div className='row ms-5 ps-2'>
                <span className='col-5 profile__task'>Read later</span>
                <span className='col-2 profile__task'>41</span>
            </div>
        </div>
    </div>

}

export default Sidebar;