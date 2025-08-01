import React, {useEffect, useRef} from 'react';
import * as fabric from 'fabric';

const Floor = () => {
    const canvasRef = useRef(null);
    const fabricCanvasRef = useRef(null);
    const margin = 0;
    
    useEffect(() => {
        const container = canvasRef.current.parentNode;
        const {width, height} = container.getBoundingClientRect();
        
        if (fabricCanvasRef.current) {
            fabricCanvasRef.current.dispose();
            fabricCanvasRef.current = null;
        }
        
        fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
            width, height, backgroundColor: '#494949'
        });
        
        // Draw the visible border rectangle for margin
        const borderRect = new fabric.Rect({
            left: margin,
            top: margin,
            fill: 'transparent',
            stroke: 'transparent',
            strokeWidth: 0,
            selectable: false,
            evented: false
        });
        
        fabricCanvasRef.current.add(borderRect);
        
        // Helper function to clamp object position inside the margin border
        const clampPosition = (obj) => {
            const canvas = fabricCanvasRef.current;
            const bounds = obj.getBoundingRect(true); // rotated bounding box
            
            let dx = 0;
            let dy = 0;
            
            // Clamp left side
            if (bounds.left < 0) {
                dx = 0 - bounds.left;
            }
            
            // Clamp right side
            if (bounds.left + bounds.width > canvas.width) {
                dx = canvas.width - (bounds.left + bounds.width);
            }
            
            // Clamp top side
            if (bounds.top < 0) {
                dy = 0 - bounds.top;
            }
            
            // Clamp bottom side
            if (bounds.top + bounds.height > canvas.height) {
                dy = canvas.height - (bounds.top + bounds.height);
            }
            
            // Adjust object position accordingly
            obj.left += dx;
            obj.top += dy;
            
            // Make sure Fabric knows position changed
            obj.setCoords();
        };
        
        // Create shapes with initial positions inside margin
        const circle1 = new fabric.Circle({
            id: 'table-1',
            left: margin + 10,
            top: margin + 10,
            radius: 30,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 2,
            hasControls: true,
            lockScalingFlip: true
        });
        
        const circle2 = new fabric.Circle({
            id: 'table-2',
            left: margin + 140,
            top: margin + 10,
            radius: 30,
            fill: '#F0BB78',
            stroke: 'black',
            strokeWidth: 2,
            hasControls: true,
            lockScalingFlip: true
        });
        
        const square1 = new fabric.Rect({
            id: 'table-3',
            left: margin + 10,
            top: margin + 140,
            width: 60,
            height: 60,
            fill: '#00A500',
            stroke: 'black',
            strokeWidth: 2,
            hasControls: true,
            lockScalingFlip: true
        });
        
        const square2 = new fabric.Rect({
            id: 'table-4',
            left: margin + 140,
            top: margin + 140,
            width: 60,
            height: 60,
            fill: '#e31414',
            stroke: 'black',
            strokeWidth: 2,
            hasControls: true,
            lockScalingFlip: true
        });
        const square3 = new fabric.Rect({
            id: 'table-4',
            left: margin + 140,
            top: margin + 300,
            width: 60,
            height: 60,
            fill: '#e36a14',
            stroke: 'black',
            strokeWidth: 2,
            hasControls: true,
            lockScalingFlip: true
        });
        const square4 = new fabric.Rect({
            id: 'table-4',
            left: margin + 10,
            top: margin + 300,
            width: 60,
            height: 60,
            fill: '#bd14e3',
            stroke: 'yellog',
            strokeWidth: 2,
            hasControls: true,
            lockScalingFlip: true
        });
        
        fabricCanvasRef.current.add(circle1, circle2, square1, square2, square3, square4);
        
        // Restrict objects from moving outside margin border
        fabricCanvasRef.current.on('object:moving', (e) => {
            const obj = e.target;
            clampPosition(obj);
        });
        
        fabricCanvasRef.current.on('object:moving', (e) => {
            clampPosition(e.target);
        });
        
        fabricCanvasRef.current.on('object:rotating', (e) => {
            clampPosition(e.target);
        });
        
        // Optional: also clamp on scaling or rotating, if you want
        
        // Resize handler omitted here for brevity (keep from previous example)
        
        return () => {
            fabricCanvasRef.current.dispose();
            fabricCanvasRef.current = null;
        };
    }, []);
    
    return <canvas ref={canvasRef} style={{width: '100%', height: '100%'}}/>;
};

export default Floor;
