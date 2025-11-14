'use client'

import { useEffect, useRef } from 'react'

export default function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.fillStyle = '#f0f8ff'
    ctx.fillRect(0, 0, width, height)

    // Draw person
    ctx.strokeStyle = '#000'
    ctx.fillStyle = '#000'
    ctx.lineWidth = 3
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    // Head
    ctx.beginPath()
    ctx.arc(400, 150, 50, 0, Math.PI * 2)
    ctx.fillStyle = '#fdbcb4'
    ctx.fill()
    ctx.strokeStyle = '#000'
    ctx.stroke()

    // Eyes
    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.arc(385, 140, 5, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(415, 140, 5, 0, Math.PI * 2)
    ctx.fill()

    // Smile
    ctx.beginPath()
    ctx.arc(400, 155, 20, 0, Math.PI, false)
    ctx.stroke()

    // Body
    ctx.strokeStyle = '#000'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(400, 200)
    ctx.lineTo(400, 350)
    ctx.stroke()

    // Arms
    ctx.beginPath()
    ctx.moveTo(400, 230)
    ctx.lineTo(330, 280)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(400, 230)
    ctx.lineTo(470, 280)
    ctx.stroke()

    // Legs
    ctx.beginPath()
    ctx.moveTo(400, 350)
    ctx.lineTo(350, 450)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(400, 350)
    ctx.lineTo(450, 450)
    ctx.stroke()

    // Hair
    ctx.fillStyle = '#4a4a4a'
    ctx.beginPath()
    ctx.arc(400, 130, 52, Math.PI, Math.PI * 2, false)
    ctx.fill()

    // Shirt
    ctx.fillStyle = '#4169e1'
    ctx.beginPath()
    ctx.moveTo(400, 200)
    ctx.lineTo(370, 220)
    ctx.lineTo(370, 300)
    ctx.lineTo(430, 300)
    ctx.lineTo(430, 220)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    // Pants
    ctx.fillStyle = '#2f4f4f'
    ctx.beginPath()
    ctx.moveTo(370, 300)
    ctx.lineTo(350, 450)
    ctx.lineTo(375, 450)
    ctx.lineTo(400, 350)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(430, 300)
    ctx.lineTo(450, 450)
    ctx.lineTo(425, 450)
    ctx.lineTo(400, 350)
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    // Shoes
    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.ellipse(360, 455, 20, 8, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.ellipse(440, 455, 20, 8, 0, 0, Math.PI * 2)
    ctx.fill()

  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f8ff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        marginBottom: '20px',
        color: '#333',
        fontSize: '2.5rem'
      }}>
        Человек
      </h1>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{
          border: '2px solid #333',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          backgroundColor: '#fff'
        }}
      />
    </div>
  )
}
