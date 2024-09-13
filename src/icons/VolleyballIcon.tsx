import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VolleyballIcon({
  iconName = 'volleyball',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
