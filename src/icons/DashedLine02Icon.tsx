import React from 'react'
import { Icon, IconProps } from '../Icon'

export function DashedLine02Icon({
  iconName = 'dashed-line-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
