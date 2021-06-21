import React from "react";
import style from "./OurTime.module.css";

export default function OurTime() {
    return (
        <div className={style.divTime}>
            <h2>Meet Our Team</h2>
                <div>
                    <h3>Peter Silva</h3>
                    <img src="./PeterVero.jpeg" alt="Minha imagem" className={style.imgTime} />
                    <p>Um cara legal pô!</p>
                </div>
                <div>
                    <h3>Peter Griffin</h3>
                    <img src="./PeterGriffin.png" alt="Oh cara" className={style.imgTime} />
                    <p>Peter Löwenbräu Griffin é o personagem principal da série televisiva Family Guy.</p>
                </div>
                <div>
                    <h3>Peter D</h3>
                    <img src="./PeterDinklage.jpg" alt="oh outro cara" className={style.imgTime} />
                    <p className={style.pDiv}>Peter Hayden Dinklage (Morristown, 11 de junho de 1969) é um premiado e aclamado ator americano.</p>
                </div>
        </div>
            )
}