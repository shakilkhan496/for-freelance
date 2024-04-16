import React from 'react'
import Header from '../../../../components/header'
import Fondateur from './fondateur'
import Contact from './contact'
import ConditionVente from './conditionVente'
import ConditionUtili from './conditionUtili'
import '../../../../styles/pages/product/propo/propo.css'

function index() {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className="content-propo">
            <ul className='navbar-propo'>
                <nav>
                    <li><a href="#1">Notre fondateur</a></li>
                    <li><a href="#2">Nous Nontact</a></li>
                    <li><a href="#3">Condition générale de vente</a></li>
                    <li><a href="#4">Condition générale d'utilisation</a></li>
                </nav>
            </ul>
            <div className="section-propo">
                <section id='1'>
                    <Fondateur />
                </section>
                <section id='2'>
                    <Contact />
                </section>
                <section id='3'>
                    <ConditionVente />
                </section>
                <section id='4'>
                    <ConditionUtili />
                </section>
            </div>
        </div>
    </div>
  )
}

export default index