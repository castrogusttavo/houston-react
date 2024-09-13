import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Heading02Icon({
  iconName = 'heading-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
