import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Recycle02Icon({
  iconName = 'recycle-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
