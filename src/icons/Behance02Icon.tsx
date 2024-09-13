import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Behance02Icon({
  iconName = 'behance-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
