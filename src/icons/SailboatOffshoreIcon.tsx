import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SailboatOffshoreIcon({
  iconName = 'sailboat-offshore',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
