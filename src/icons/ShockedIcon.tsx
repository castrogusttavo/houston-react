import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ShockedIcon({ iconName = 'shocked', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
