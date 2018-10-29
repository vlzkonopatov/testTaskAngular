interface OptionTable {
  sort: string;
  columns: any;
}
interface Table {
  id: string;
  person: string;
  improvement: Info;
}

interface Info {
  all: number;
  done: number;
  inControl: number;
  rejected: number;
}

