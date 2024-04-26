import React from 'react'
import GameconsoleFirst from '../components/GameConsoleBox/GameconsoleFirst'
import GameconsoleSecond from '../components/GameConsoleBox/GameconsoleSecond'
import GameconsoleThird from '../components/GameConsoleBox/GameconsoleThird'
import GameconsoleFourth from '../components/GameConsoleBox/GameconsoleFourth'

const GameConsole = () => {
  return (
    <section className='game_console_section'>
        <div className="container">
            <div className='gameconsole_main_row'>
                <div className='game_console_first'>
                    <GameconsoleFirst/>
                </div>
                <div className='game_console_mid'>
                    <GameconsoleSecond/>
                    <GameconsoleThird/>
                </div>
                <div className='game_console_last'>
                    <GameconsoleFourth/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GameConsole