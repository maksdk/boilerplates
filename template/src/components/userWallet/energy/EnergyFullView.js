//@ts-check
import BaseView from "../../../libs/BaseView";

export default class EnergyFullView extends BaseView {
	constructor(view) {
		super(view.scene);
		this.state = "full";
		this.energyValue = null;
	}

	static get state() {
		return "full";
	}

	onEnter() {
		const back = new Phaser.GameObjects.Rectangle(this.scene, 0, 0, 200, 100, 0x0091bc);
        this.add(back);

        const icon = new Phaser.GameObjects.Arc(this.scene, 0, 0, 30);
        icon.setPosition(-55, 0);
        icon.setFillStyle(0xffff00);
		this.add(icon);
		
		const energyValue = new Phaser.GameObjects.Text(this.scene, 0, 0, '0', { color: '#ff0000', fontSize: "30px", fontStyle: "bold" });
        energyValue.setOrigin(0.5);
		energyValue.setPosition(icon.x, icon.y);
		this.energyValue = energyValue;
        this.add(energyValue);
        
        const energyStatus = new Phaser.GameObjects.Text(this.scene, 0, 0, "Полно", { fontSize: "30px", fontStyle: "bold" });
        energyStatus.setOrigin(0.5);
        energyStatus.setPosition(25, 0);
        this.add(energyStatus);
	}

	onExit() {
		this.setVisible(false);
	}

	updateState(params) {
		const { value } = params;
		this.energyValue.setText(String(value));
	}
}