import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SleevelessIcon({
  iconName = 'sleeveless',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
