import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TaxiIcon({ iconName = 'taxi', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
