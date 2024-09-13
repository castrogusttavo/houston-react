import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SailboatCoastalIcon({
  iconName = 'sailboat-coastal',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
