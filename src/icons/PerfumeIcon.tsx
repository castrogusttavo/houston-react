import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PerfumeIcon({ iconName = 'perfume', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
