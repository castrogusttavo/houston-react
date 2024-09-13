import React from 'react'
import { Icon, IconProps } from '../Icon'

export function YenCircleIcon({
  iconName = 'yen-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
