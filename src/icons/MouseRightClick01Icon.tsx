import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MouseRightClick01Icon({
  iconName = 'mouse-right-click-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
