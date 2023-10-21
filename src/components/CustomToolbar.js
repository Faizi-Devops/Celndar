  import React from 'react';
  import { FaChevronRight,FaChevronLeft  } from 'react-icons/fa'; 
  import { BiSolidDownArrow } from 'react-icons/bi';
  import Somedrop from './Somedrop';
  import { AiOutlineSearch,AiFillSetting,AiOutlineQuestionCircle } from 'react-icons/ai';
  ;




  const CustomToolbar = ({ label, onNavigate }) => (
      
      <div style={{ display: 'flex', }}>
          {/* Custom Button for Today */}
          <img src='baricon.jpg' alt="Description of the image" height={50} style={{marginTop:"0px"}} />
          <img src='cal.jpg' alt="Description of the image" height={35} style={{margin:"8px 0px 0px 13px"}} />

          <p style={{fontSize:"24px",margin:"5px 0px 0px 10px"}}>Calendar </p>
          
          
        
          <div style={{ marginRight: '30px' }}>

          <button type='button' className='btn btn-sm border border-dark text-dark' style={{margin:"9px 0px 0px 50px"}} onClick={() => onNavigate('TODAY')}>
    Today 
  </button>
          </div>
          
          {/* Custom Button for Previous */}
          <div style={{ margin:"9px 10px 0px 10px",opacity:0.7 }}>
              {/* <button >Previous</button> */}
              <FaChevronLeft onClick={() => onNavigate('PREV')}/>
          </div>

          {/* Custom Button for Next */}
          <div style={{ margin:"9px 10px 0px 10px",opacity:0.7 }}>
              {/* <button >Next</button> */}
              <FaChevronRight onClick={() => onNavigate('NEXT')}/>
          </div>

          {/* Calendar Label */}
          <div style={{ margin:"8px 0px 0px 20px ", textAlign: 'center',fontSize:"20px", }}>
              {label}
          </div>
          <div class="form-group col-md-3" style={{ margin: "3px 0px 0px 80px" }}>
        <Somedrop />
        </div>
        
          <div style={{margin:"8px 0px 0px 140px",opacity:0.7}}>
        <AiOutlineSearch size={25} />
        </div>
        <div>
        <AiOutlineQuestionCircle size={22}style={{margin:"10px 0px 0px 15px",opacity:0.7}} />
        </div>
        <div>
        <AiFillSetting size={22} style={{margin:"10px 0px 0px 15px",opacity:0.7}} />
        </div>
        <button type='button' className='btn btn-sm border border-dark text-dark' style={{height:"35px",margin:"5px 0px 0px 30px "}} onClick={() => onNavigate('TODAY')}>
    Month<BiSolidDownArrow size={10} color="black" />
  </button>

        {/* <button
        className='btn btn-sm border border-dark text-dark'
        style={{ margin: '9px 10px 0px 10px' }}
        onClick={() => onNavigate('DAY')}
        disabled={view === 'day'}
      >
        Day
      </button>
      <button
        className='btn btn-sm border border-dark text-dark'
        style={{ margin: '9px 10px 0px 10px' }}
        onClick={() => onNavigate('WEEK')}
        disabled={view === 'week'}
      >
        Week
      </button>
      <button
        className='btn btn-sm border border-dark text-dark'
        style={{ margin: '9px 10px 0px 10px' }}
        onClick={() => onNavigate('MONTH')}
        disabled={view === 'month'}
      >
        Week
      </button> */}


          
      </div>
  );

  export default CustomToolbar;
