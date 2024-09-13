import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BookOpen02Icon({
  iconName = 'book-open-02',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
