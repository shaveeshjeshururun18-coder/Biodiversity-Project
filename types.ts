export interface BiodiversityData {
  name: string;
  speciesCount: number;
}

export interface ImpactStat {
  label: string;
  value: string;
  description: string;
  icon: 'alert' | 'tree' | 'area' | 'money';
}

export interface RestorationStep {
  title: string;
  description: string;
  stepNumber: number;
}
