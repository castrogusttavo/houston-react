import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GibbousMoonIcon({
  iconName = 'gibbous-moon',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
