import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BurningCdIcon({
  iconName = 'burning-cd',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
