class BirdType {

	public constructor() {

	}

	public static _type(val:number):string{
		switch (val) {
			case 0:
				return "bule";
			case 1:
				return "green";
			case 2:
				return "pink";
			case 3:
				return "purple";
			case 4:
				return "red";
			case 5:
				return "white";
			case 6:
				return "yellow";

		}
	};
}