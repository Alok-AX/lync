import React from 'react';
import Animation from '../../assets/Animation.gif'

const GameconsoleFirst = () => {
  return (
    <div className='game_console_first_box_wrap'>
        <div className="game_console_first_box_wrap_content">
            <h6>Elevate Your Gameplay with Essential Insights!</h6>
            <p>Unleash Your Potential - Explore the Knowledge Hub Today!</p>
            <button>View Docs</button>
        </div>
        <div className="game_console_first_box_wrap_svg">
            <img src={Animation} alt="" />
        </div>
    </div>
  )
}

export default GameconsoleFirst