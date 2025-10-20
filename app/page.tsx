"use client"

import type React from "react"
import { useEffect, useState } from "react"

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % 3)
    }, 1000)

    return () => clearInterval(carouselInterval)
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/vara@1.0.0/dist/vara.min.js"
    script.onload = () => {
      setTimeout(() => {
        initializeAnimation()
      }, 100)
    }
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const initializeAnimation = () => {
    if (typeof (window as any).Vara === "undefined") return

    const Vara = (window as any).Vara
    let fontSize = 72
    if (window.screen.width < 480) fontSize = 20
    else if (window.screen.width < 700) fontSize = 28
    else if (window.screen.width < 1200) fontSize = 56

    const vara = new Vara(
      "#container",
      "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: "Những bông hoa này nở để tôn vinh",
          y: 150,
          fromCurrentPosition: { y: false },
          duration: 3000,
        },
        {
          text: "vẻ đẹp và tình yêu của em",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 3000,
        },
        {
          text: "Mỗi bông hoa là một lời chúc",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 3000,
        },
        {
          text: "Mỗi ánh sáng là một khoảnh khắc yêu thương",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 3500,
        },
        {
          text: "Chúc em một ngày tuyệt vời",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 3000,
        },
        {
          text: "Với tình yêu vô tận",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 2500,
        },
        {
          text: "Mong em luôn tươi cười",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 3000,
        },
        {
          text: "Hạnh phúc mãi theo em",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 3000,
        },
        {
          text: "Cảm ơn em vì tất cả",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 2800,
        },
        {
          text: "Yêu em nhiều lắm",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 2500,
        },
        {
          text: "Chúc em sức khỏe và thành công",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 3200,
        },
        {
          text: "Chúc em sẽ là hạn phúc nhất",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 3000,
          id: "final_message",
        },
        {
          text: "Tặng em",
          y: 150,
          fromCurrentPosition: { y: false },
          delay: 3000,
          duration: 2500,
          id: "final_message_2",
        },
      ],
      {
        strokeWidth: 2,
        color: "#ff1493",
        fontSize: fontSize,
        textAlign: "center",
      },
    )

    vara.ready(() => {
      let erase = true
      vara.animationEnd((i: string, o: any) => {
        if (i === "final_message_2") erase = false
        if (erase) {
          o.container.style.transition = "opacity 1s 1s"
          o.container.style.opacity = 0
        }
      })
    })
  }

  const images = [
    "/beautiful-birthday-celebration-1.jpg",
    "/beautiful-birthday-celebration-2.jpg",
    "/beautiful-birthday-celebration-3.jpg",
  ]

  return (
    <div className="scroll-container">
      <div className="night"></div>

      {/* Section 1: Image Carousel */}
      <section className="section section-1">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <img
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`Birthday image ${currentImageIndex + 1}`}
              className="carousel-image"
            />
          </div>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <div key={index} className={`dot ${index === currentImageIndex ? "active" : ""}`}></div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Letter/Card */}
      <section className="section section-2">
        <div className="letter-container">
          <div className="letter">
            <div className="letter-header">
              <h1 className="letter-title">20/10 - Ngày của những lời yêu thương</h1>
            </div>
            <div className="letter-content">
              <p className="letter-greeting">Gửi đến Ngọc Mai,</p>
              <p className="letter-text">
                Hôm nay là ngày đặc biệt dành cho những người phụ nữ tuyệt vời như em. Một ngày để tôi bày tỏ lòng kính
                trọng và yêu thương sâu sắc dành cho em.
              </p>
              <p className="letter-text">
                Em là ánh sáng trong cuộc sống của tôi, với nụ cười rạng rỡ và trái tim tốt bụng. Mỗi ngày bên em là một
                món quà quý giá mà tôi không bao giờ quên.
              </p>
              <p className="letter-text">
                Tôi chúc em luôn khỏe mạnh, hạnh phúc và thành công trong mọi điều em làm. Mong em biết rằng em rất quan
                trọng với tôi.
              </p>
              <p className="letter-closing">Với tình yêu vô tận,</p>
              <p className="letter-signature">Người yêu em</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Flowers & Gift Message */}
      <section className="section section-3">
        <div className="flowers">
          {/* Flower 1 */}
          <div className="flower flower--1">
            <div className="flower__label flower__label--1">Yêu em</div>
            <div className="flower__leafs flower__leafs--1">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`flower__light flower__light--${i}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          {/* Flower 2 */}
          <div className="flower flower--2">
            <div className="flower__label flower__label--2">Hạnh phúc</div>
            <div className="flower__leafs flower__leafs--2">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`flower__light flower__light--${i}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          {/* Flower 3 */}
          <div className="flower flower--3">
            <div className="flower__label flower__label--3">Tươi cười</div>
            <div className="flower__leafs flower__leafs--3">
              <div className="flower__leaf flower__leaf--1"></div>
              <div className="flower__leaf flower__leaf--2"></div>
              <div className="flower__leaf flower__leaf--3"></div>
              <div className="flower__leaf flower__leaf--4"></div>
              <div className="flower__white-circle"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`flower__light flower__light--${i}`}></div>
              ))}
            </div>
            <div className="flower__line">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`flower__line__leaf flower__line__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          {/* Grass and decorative elements */}
          <div className="grow-ans" style={{ "--d": "1.2s" } as React.CSSProperties}>
            <div className="flower__g-long">
              <div className="flower__g-long__top"></div>
              <div className="flower__g-long__bottom"></div>
            </div>
          </div>

          <div className="growing-grass">
            <div className="flower__grass flower__grass--1">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i}`}></div>
              ))}
              <div className="flower__grass__overlay"></div>
            </div>
          </div>

          <div className="growing-grass">
            <div className="flower__grass flower__grass--2">
              <div className="flower__grass--top"></div>
              <div className="flower__grass--bottom"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`flower__grass__leaf flower__grass__leaf--${i}`}></div>
              ))}
              <div className="flower__grass__overlay"></div>
            </div>
          </div>

          {/* Additional decorative elements */}
          <div className="grow-ans" style={{ "--d": "2.4s" } as React.CSSProperties}>
            <div className="flower__g-right flower__g-right--1">
              <div className="leaf"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ "--d": "2.8s" } as React.CSSProperties}>
            <div className="flower__g-right flower__g-right--2">
              <div className="leaf"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ "--d": "2.8s" } as React.CSSProperties}>
            <div className="flower__g-front">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i}`}>
                  <div className="flower__g-front__leaf"></div>
                </div>
              ))}
              <div className="flower__g-front__line"></div>
            </div>
          </div>

          <div className="grow-ans" style={{ "--d": "3.2s" } as React.CSSProperties}>
            <div className="flower__g-fr">
              <div className="leaf"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={`flower__g-fr__leaf flower__g-fr__leaf--${i}`}></div>
              ))}
            </div>
          </div>

          {/* Long grass elements */}
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className={`long-g long-g--${i}`}>
              {[0, 1, 2, 3].map((j) => (
                <div key={j} className="grow-ans" style={{ "--d": `${3 + (i + j) * 0.2}s` } as React.CSSProperties}>
                  <div className={`leaf leaf--${j}`}></div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="gift-message">
          <h2>Tặng em</h2>
        </div>

        <div id="container"></div>
      </section>
    </div>
  )
}
