import React, { PureComponent } from 'react';
import { Icon } from 'antd';

export default class TestPicker extends PureComponent {
  constructor(props) {
    super(props);
    this.canvasRef = ref => {
      this.canvas = ref;
    };
  }

  componentDidMount() {
    const radius = 100;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.strokeStyle = '#00fff6'; //设置描边样式
    this.ctx.lineWidth = 8; //设置线宽
    this.ctx.arc(120, 100, (100 * 2) / 3, (-1 / 2) * Math.PI, this.angleToRadian(78), false);
    this.ctx.stroke(); //绘制
    this.ctx.closePath(); //路径结束
    this.ctx.restore();

    this.ctx.save();
    this.ctx.beginPath(); //路径开始
    this.ctx.lineWidth = 8;
    this.ctx.setLineDash([1, 1]);
    // this.ctx.lineDashOffset = 8;
    // this.ctx.fill();
    this.ctx.strokeStyle = '#16C4CB';
    this.ctx.arc(120, 100, (100 * 2) / 3, 0, 2 * Math.PI, false);
    this.ctx.stroke();
    this.ctx.closePath(); //路径结束
    this.ctx.restore();

    this.ctx.save();
    this.ctx.beginPath(); //路径开始
    this.ctx.lineWidth = 4;
    this.ctx.setLineDash([1, 1]);
    // this.ctx.lineDashOffset = 8;
    this.ctx.fill();
    this.ctx.strokeStyle = '#00fff6';
    this.ctx.arc(120, 100, (86 * 2) / 3, 0, 2 * Math.PI, false);
    this.ctx.stroke();
    this.ctx.closePath(); //路径结束
    this.ctx.restore();

    // //绘制圆弧（必须要设定起始点）
    // this.ctx.save();
    // this.ctx.beginPath();
    // this.ctx.fillRect(600, 400, 10, 10);
    // this.ctx.fillRect(700, 500, 10, 10);
    // this.ctx.fillStyle = 'blue';
    // this.ctx.fillRect(700, 400, 10, 10);

    // this.ctx.beginPath();
    // this.ctx.moveTo(700, 400);
    // this.ctx.arcTo(600, 600, 700, 700, 500);
    // this.ctx.stroke();
  }

  // 把角度转换为弧度
  angleToRadian = angle => {
    return (Math.PI / 360) * angle;
  };

  render() {
    return (
      <div className="canvas-square">
        <canvas ref={this.canvasRef} width="220" height="220">
          您的浏览器不支持canvas，请更换浏览器.
        </canvas>
        <div className="content">
          <Icon type="bulb" theme="filled" />
          <h3>45%</h3>
          <h4>真在发油</h4>
          <p>京A701</p>
        </div>
      </div>

      // {/* <div>
      //   <Progress
      //     data={{
      //       type: 'dashedCircle',
      //       color: ['red', '#000'],
      //       r: 100,
      //       value: 12,
      //     }}
      //   >
      //     52%
      //   </Progress>
      // </div> */}
    );
  }
}
