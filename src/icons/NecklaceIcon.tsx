import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NecklaceIcon({ iconName = 'necklace', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
