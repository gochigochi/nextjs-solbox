"use client"

import { useState } from "react"
import {
    Container,
    Title,
    AccordionContainer,
    Item,
    Qcontainer,
    Chevron,
    Acontainer,
    Q,
    A,
} from "./Elements"

const content = [
  {
    id: 1,
    q: "Reglas básicas de seguridad para instalar un kit Solbox",
    a: "<div><p>Antes de instalar tu kit Solbox y para prevenir cualquier situación de sobrecarga eléctrica, te recomendamos que compruebes que tu circuito está dimensionado correctamente.</p><p>Aquí están los elementos esenciales para su seguridad: </p><ul><li>Una instalación eléctrica acorde con las normas eléctricas del pais</li><li>Una toma doméstica dotada de buena tierra, una fase y un neutro (toma 230V 2P+T 16A), dedicada al Solbox</li><li>Se recomienda un protector contra sobretensiones si vive en áreas tormentosas</li><li>Se recomienda la existencia de un pararrayos si vive en zonas con tormentas eléctricas  -  debe colocarse en el panel eléctrico principal</li></ul></div>"
  },
  {
    id: 2,
    q: "¿Cómo incorporamos los elementos de seguridad en nuestros kit?",
    a: "<div><p>Todos nuestros kit están equipados de una caja de seguridad que comprende:</p><ul><li>Un disyuntor diferencial de 30mA</li><li>Un disyuntor termomagnético de 16A</li><li>Un cable de 1,5 mm2 para conectar la Solbox a la red de la casa</li></ul></div>",
  },
  {
    id: 3,
    q: "Encuentra el lugar perfecto para instalar tu kit.",
    a: "<div><p>La sombra es tu enemigo número 1. Reduce significativamente la cantidad de energía producida.</p><p>Su kit Solbox funciona mejor cuando todos los paneles están orientados e inclinados por igual.</p><p>La producción solar es a largo plazo. ¡Sus paneles están ahí para producir al menos 25 años!</p><h3>1. La orientación del kit</h3><p>Te recomendamos que orientes tu kit lo máximo posible hacia el Norte.</p><p>De hecho, cuanto más oriente el kit  Solbox hacia el norte, más producirá anualmente.</p><p>Una orientación noroeste o noreste  producirá alrededor del 95% de la producción máxima en el norte.</p><p>Una orientación Este u Oeste producirá alrededor del 80% de la producción máxima en el Norte. </p><p>Asegúrese de orientar todos los paneles de su kit de la misma manera.</p><p>Su producción solar siempre será igual a la energía producida por el panel que tiene la eficiencia más baja, es decir, el panel con la menor orientación.</p><img src='/assets/images/faq1.png'/><h3>2. La inclinación de tus paneles</h3><p>a inclinación de los módulos solares depende del tipo de instalacion que haya elegido (pared vertical, pared inclinada o suelo) y del espacio disponible para instalar su kit.</p><p><em>Asegúrese de inclinar todos sus paneles de la misma manera.</em></p><p>Su producción solar es igual a la energía producida por el panel que tiene la eficiencia más baja, es decir, el panel con la menor orientación o inclinación.</p><p>En posición de pared inclinada, mantenga al menos 65 cm de distancia entre los paneles superior e inferior de 320 W, y 1 m para paneles de 480 W.</p><p>En la posición del suelo, mantenga al menos 1 m entre las líneas para los paneles de 320 W y 2 m para el kit de 480 W.</p><h3>3. Pleno sol durante todo el día</h3><p>Antes de cualquier instalación, observe la ubicación disponible para su kit durante el día. ¿El árbol circundante proyecta una sombra? ¿Y el borde de tu techo? ¿La casa de al lado?</p><p>Aunque una sombra puede parecer pequeña y cubrir solo una pequeña parte de sus paneles, el impacto puede ser muy significativo. Las previsiones anuales de producción de energía se basan en una ausencia total de sombra y paneles orientados de manera similar.</p><p>Para entender la razón física detrás de este valioso consejo, volvamos a la analogía hidráulica:</p><p>Tienes que imaginar cada celda de tus paneles solares (cada cuadrado negro) como un pequeño grifo.</p><p>Cada válvula está conectada en serie a la celda anterior y a la siguiente celda; gracias a una tubería. El agua fluye de un grifo a otro.</p><p>Si una celda captura menos brillo, entonces 'cerrará' su grifo y reducirá el flujo de agua en todo el circuito.</p><p>A pesar de la buena irradiación solar de las otras células, no podrán producir de manera óptima. El agua ya no pasará a través de las tuberías y de un grifo a otro.</p><p>¡Por lo tanto, es la potencia total de su kit la que se ve afectada y se reduce considerablemente!</p><img src='/assets/images/faq2.png'/></div>",
  },
  {
    id: 4,
    q: "Nuestros consejos para un Solbox floreciente",
    a: "<div><p>Su kit Solbox produce siempre y cuando el inversor  (situado en la parte posterior de los paneles) parpadee en azul normal  , incluso si el inversor no está sincronizado o conectado.</p><p>La caja de seguridad instalada verticalmente es impermeable</p><p>Compruebe que su señal WiFi es suficiente en la ubicación proporcionada por su router. Recomendamos un máximo de 20 metros entre su caja de Internet y el Solbox.</p><ul><li>El inversor solo funciona con una señal wifi de frecuencia 2.4Ghz (y no 5Ghz).</li><li>El inversor se instala en la sombra, debajo de uno de los paneles.</li><li>La longitud del cable de CA de la caja de seguridad es de  10 m. Sujete el cable si es necesario para reducir esta longitud.</li><li>La caja de seguridad se instala verticalmente (con los cables abajo)</li><li>La caja de seguridad se conecta a una toma de corriente doméstica, interior o exterior. Aconsejamos dedicar un enchufe a su kit: ¡evitaremos los enchufes multiples! </li><li>Hay una caja de seguridad conectada por circuito eléctrico solamente.</li></ul><p>En detalle: comprueba el rango de señal de tu red wifi</p><p>Su kit produce energía solar que alimenta su hogar, incluso si el inversor no está sincronizado.</p><p>La señal WiFi es una señal sensible a las interferencias. Muchos factores pueden afectar el emparejamiento exitoso de su Solbox con su red WiFi doméstica.</p><p>Tómese su tiempo: el emparejamiento se realiza paso a paso. Por supuesto, seguimos disponibles para acompañarle en el procedimiento.</p><p>El rúter necesita al menos 2 barras de la red Wifi de su hogar para funcionar correctamente</p><p>A continuación, le indicamos cómo probar la recepción Wifi desde la ubicación de ruter:</p><ul><li>Conecte su teléfono al Wifi de su hogar,</li><li>Colócate con tu teléfono, en la esquina de donde estarás conectado al Solbox</li><li>Espera 2 minutos y mira el nivel de recepción Wifi en tu teléfono.</li></ul><p>Por encima de 2 barras, la señal es buena.</p><p>El Rúter podrá sincronizarse fácilmente con tu red Wifi y el estado de conexión debe ser estable en el tiempo. ¡Tu Solbox florecerá en esta ubicación!</p><p>Entre 1 y 2 barras de Wifi, la conexión es bastante lenta.</p><p>El inversor podrá sincronizarse después de varios intentos y la conexión podría ser inestable con el tiempo. Este no es el lugar ideal para tu Solbox, ¡pero te damos consejos para facilitar el emparejamiento!</p><ul><li>1.Desenchufe el inversor de los paneles solares y conéctelo a la misma habitación que el rúter del domicilio. Una vez configurado, puede volver a conectar el inversor al resto del kit.</li><li>Pase el cable Solbox a  través de una pared, para acercar su Solbox  a la caja de Internet.</li><li>3.Equípese con cables de extensión impermeables que se colocarán entre el panel y  el inversor. Podrás acercar el Solbox a tu caja de internet.</li><li>4.Equípate con un repetidor wifi para ampliar el alcance de tu señal wifi.</li></ul><p>0 bar, la conexión Wifi no es suficiente.</p><p>Sincronizar el Solbox con tu Solbox puede ser muy difícil, si no imposible.</p><p>Sin Wifi o caja de internet, tendrá que usar un teléfono móvil como punto de acceso.</p></div>",
  },
]

const Faqs = () => {
  const [openedId, setOpenedId] = useState(1)

  const handleToggle = (id) => {
      setOpenedId(null)
      setTimeout(() => setOpenedId(id !== openedId ? id : null), 200)
  }

  return (
    <Container>
      <Title><span>KIT SOLBOX </span>– PREGUNTAS FRECUENTES</Title>
      <AccordionContainer>
          {
              content.map(item => {
                  return (
                      <Item key={item.id} open={openedId === item.id}>
                          <Qcontainer onClick={() => handleToggle(item.id)}>
                              <Q>{item.q}</Q>
                              <Chevron open={openedId === item.id} />
                          </Qcontainer>
                          <Acontainer open={openedId === item.id}>
                              <A dangerouslySetInnerHTML={{ __html: item.a }} />
                          </Acontainer>
                      </Item>
                  )
              })
          }
      </AccordionContainer>
    </Container>
  )
}

export default Faqs