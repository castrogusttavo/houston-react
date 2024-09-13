import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AirbnbIcon({ iconName = 'airbnb', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
