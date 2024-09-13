import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ScreenAddToHomeIcon({
  iconName = 'screen-add-to-home',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
